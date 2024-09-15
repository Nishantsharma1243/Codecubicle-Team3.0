import * as React from "react";

interface ResetPasswordTemplateProps {
  firstName: string;
  resetUrl: string;
}

export const ResetPasswordTemplate: React.FC<
  Readonly<ResetPasswordTemplateProps>
> = ({ firstName, resetUrl }) => (
  <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
    <h1>Hello, {firstName}!</h1>
    <div>
      It looks like you requested a password reset. Click the link below to
      reset your password:
    </div>
    <a href={resetUrl} style={{ color: "#007bff", textDecoration: "none" }}>
      Reset your password
    </a>
    <div>If you did not request a password reset, please ignore this email.</div>
    <div>Thank you!</div>
  </div>
);
