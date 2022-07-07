import React from "react";
import { Card } from "react-bootstrap";

const Blogs = () => {
  return (
    <div className="container mx-auto">
      <Card>
        <Card.Body>
          <Card.Title>
            1. Difference between authorization and authentication?
          </Card.Title>
          <Card.Text>
            <b>authentication</b>
            <br />
            In authentication process, the identity of users are checked for
            providing the access to the system or persons are verified.
            <br />
            <b>authorization</b>
            <br />
            In authorization process, person's or user's authorities are checked
            for accessing the resources or users are validated.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>
            2. Why are you useing firebase? What other options do you have to
            implement authentication?
          </Card.Title>
          <Card.Text>
            <b>I am useing firebase for authentication and hosting.</b>
            <br />
            The top ten User Authentication platforms :
            <br />
            Prove MFA , DUO Access , HID Global IAM , ESET Secure
            Authentication, Ping Identity , TypingDNA Verify 2FA , Thales
            SafeNet Trusted Access , Entrust Identity Enterprise ,Okta Adaptive
            Multi-Factor Authentication , SecureAuth Identity Platform.
          </Card.Text>
        </Card.Body>
      </Card>
      <Card>
        <Card.Body>
          <Card.Title>
            3. What other services doesfirebase provide other than
            authentication?
          </Card.Title>
          <Card.Text>
            There are many services which Firebase provides, Most useful of them
            are:
            <br />
            Cloud Firestore, Cloud Functions, Hosting, Cloud Storage, Google
            Analytics, Predictions, Cloud Messaging, Dynamic Links, Remote
            Config
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Blogs;
