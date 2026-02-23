// EmailJS Configuration
// Replace these with your actual EmailJS credentials
export const EMAILJS_CONFIG = {
  SERVICE_ID: 'service_82it4fn', // e.g., 'service_abc123'
  TEMPLATE_ID_OWNER: 'Ytemplate_welcome_user', // Template for SAAD team notification
  TEMPLATE_ID_SENDER: 'template_welcome_user', // Template for sender confirmation
  PUBLIC_KEY: 'service_82it4fn', // e.g., 'user_abc123xyz'
};

// Template parameter mapping for owner notification
export const getOwnerTemplateParams = (formData: {
  name: string;
  email: string;
  message: string;
}) => ({
  from_name: formData.name,
  from_email: formData.email,
  message: formData.message,
  to_name: 'SAAD Team',
  reply_to: formData.email,
});

// Template parameter mapping for sender confirmation
export const getSenderTemplateParams = (formData: {
  name: string;
  email: string;
  message: string;
}) => ({
  to_name: formData.name,
  to_email: formData.email,
  message_preview: formData.message.substring(0, 100) + (formData.message.length > 100 ? '...' : ''),
  from_name: 'SAAD Team',
  reply_to: 'saadnmiet@gmail.com',
});
