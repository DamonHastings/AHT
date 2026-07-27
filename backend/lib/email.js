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

/**
 * Compile a forming-groups interest submission into a plain-text email body.
 */
export function compileGroupInterestEmail(data) {
  const interests = Array.isArray(data.interests)
    ? data.interests.join('; ')
    : data.interests
  const lines = [
    'New group interest submission',
    '---',
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    interests ? `Interested in: ${interests}` : null,
    data.format ? `Preferred format: ${data.format}` : null,
    data.notes ? `Notes:\n${data.notes}` : null,
  ].filter(Boolean)
  return lines.join('\n')
}

/**
 * Send a group-interest submission as email to the practitioner.
 * No-op if PRACTITIONER_EMAIL or SMTP/MAILER_URL is not configured.
 */
export async function sendGroupInterestEmail(data) {
  const to = process.env.PRACTITIONER_EMAIL
  if (!to) return { sent: false, reason: 'PRACTITIONER_EMAIL not set' }

  const transporter = getTransporter()
  if (!transporter) return { sent: false, reason: 'No mail transport configured (SMTP or MAILER_URL)' }

  const subject = `Group interest from ${data.name}`
  const text = compileGroupInterestEmail(data)

  try {
    await transporter.sendMail({
      from: process.env.MAIL_FROM || process.env.SMTP_USER || 'noreply@localhost',
      to,
      subject,
      text,
    })
    return { sent: true }
  } catch (err) {
    console.error('Send group interest email error:', err)
    return { sent: false, error: err.message }
  }
}

/**
 * Compile a contact-form submission into a plain-text email body.
 */
export function compileContactEmail(data) {
  const lines = [
    'New contact form message',
    '---',
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    data.phone ? `Phone: ${data.phone}` : null,
    data.message ? `Message:\n${data.message}` : null,
  ].filter(Boolean)
  return lines.join('\n')
}

/**
 * Send a contact-form submission as email to the practitioner.
 * No-op if PRACTITIONER_EMAIL or SMTP/MAILER_URL is not configured.
 */
export async function sendContactEmail(data) {
  const to = process.env.PRACTITIONER_EMAIL
  if (!to) return { sent: false, reason: 'PRACTITIONER_EMAIL not set' }

  const transporter = getTransporter()
  if (!transporter) return { sent: false, reason: 'No mail transport configured (SMTP or MAILER_URL)' }

  const subject = `Contact form message from ${data.name}`
  const text = compileContactEmail(data)

  try {
    await transporter.sendMail({
      from: process.env.MAIL_FROM || process.env.SMTP_USER || 'noreply@localhost',
      to,
      replyTo: data.email || undefined,
      subject,
      text,
    })
    return { sent: true }
  } catch (err) {
    console.error('Send contact email error:', err)
    return { sent: false, error: err.message }
  }
}
