import React from "react";

const Blogs = () => {
  return (
    <div className="container text-start">
      <h2 className="text-center">Question and Answer Session</h2>
      <br />
      <p>
        <b>Question.1:</b> Write the difference between authorization and
        authentication.
      </p>
      <p>
        <b>Answer: </b> 1. Authentication is the process of verifying who
        someone is, whereas authorization is the process of verifying what
        specific applications, files, and data a user has access to. <br />
        2. Authentication works through passwords, one-time pins, biometric
        information, and other information provided or entered by the user.On
        the other hand,authorization works through settings that are implemented
        and maintained by the organization. <br />
        3. Authentication is the first step of a good identity and access
        management process.On the other hand,authorization always takes place
        after authentication.
      </p>
      <br />
      <p>
        <b>Question.2:</b>
        Why are you using firebase? What other options do you have to implement
        authentication?{" "}
      </p>
      <p>
        <b>Answer: </b>
        We use firebase for authentication system.But besides authentication
        system it provides many others functionality like hosting,storage etc.
        It is a service of google and easy to use.It store data in real time.
        <br />
        Others options for authentication
        are:Auth0,MongoDB,Octa,Passport,keycloak etc.
      </p>
      <br />
      <p>
        <b>Question.3:</b>
        What other services does firebase provide other than authentication?
      </p>
      <p>
        <b>Answer: </b>
        Firebase is popular now-a-days. Firebase provide these services other
        than authentication: Cloud firestore,cloud functions,hosting,cloud
        storage,google analytic,predictions,cloud messaging etc.
      </p>
    </div>
  );
};

export default Blogs;
