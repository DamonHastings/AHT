import nodemailer from 'nodemailer'

/**
 * Compile appointment/consultation data into a plain-text email body.
 * Used for V1 "form compiles to email" and for optional sending.
 */
export function compileConsultationEmail(appointment) {
  const lines = [
    'New consultation request',
    '---',
    `Name: ${appointment.name}`,
    `Email: ${appointment.email}`,
    appointment.phone ? `Phone: ${appointment.phone}` : null,
    appointment.preferredDate
      ? `Preferred date: ${new Date(appointment.preferredDate).toLocaleDateString()}`
      : null,
    appointment.preferredTime ? `Preferred time: ${appointment.preferredTime}` : null,
    appointment.message ? `Message:\n${appointment.message}` : null,
  ].filter(Boolean)
  return lines.join('\n')
}

function getTransporter() {
  if (process.env.MAILER_URL) {
    return nodemailer.createTransport(process.env.MAILER_URL)
  }
  if (
    process.env.SMTP_HOST &&
    process.env.SMTP_USER &&
    process.env.SMTP_PASS
  ) {
    return nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    })
  }
  return null
}

/**
 * Send consultation request as email to the practitioner.
 * No-op if PRACTITIONER_EMAIL or SMTP/MAILER_URL is not configured.
 */
export async function sendConsultationEmail(appointment) {
  const to = process.env.PRACTITIONER_EMAIL
  if (!to) return { sent: false, reason: 'PRACTITIONER_EMAIL not set' }

  const transporter = getTransporter()
  if (!transporter) return { sent: false, reason: 'No mail transport configured (SMTP or MAILER_URL)' }

  const subject = `Consultation request from ${appointment.name}`
  const text = compileConsultationEmail(appointment)

  try {
    await transporter.sendMail({
      from: process.env.MAIL_FROM || process.env.SMTP_USER || 'noreply@localhost',
      to,
      subject,
      text,
    })
    return { sent: true }
  } catch (err) {
    console.error('Send consultation email error:', err)
    return { sent: false, error: err.message }
  }
}
