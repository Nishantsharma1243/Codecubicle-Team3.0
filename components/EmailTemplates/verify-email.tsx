import * as React from "react";

interface VerifyEmailTemplateProps {
  firstName: string;
  verificationUrl: string;
}

export const VerifyEmailTemplate: React.FC<
  Readonly<VerifyEmailTemplateProps>
> = ({ firstName, verificationUrl }) => (
  <div style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
    <h1>Welcome, {firstName}!</h1>
    <div>
      Thanks for signing up! Please verify your email address by clicking the
      link below:
    </div>
    <a
      href={verificationUrl}
      style={{ color: "#007bff", textDecoration: "none" }}
    >
      Verify your email
    </a>
    <div>If you did not sign up for this account, please ignore this email.</div>
    <div>Thank you!</div>
  </div>
);
