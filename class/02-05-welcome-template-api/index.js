import { checkValidationEmail, getWelcomeTemplate, sendWelcomeTemplateToEmail } from "./email.js";

function createUser(user){
    const isVaild = checkValidationEmail(user.email);
    if(isVaild === true){
        const template = getWelcomeTemplate(user);

        sendWelcomeTemplateToEmail(user.email, template)
    }
}

const user = {
    name: '김지우',
    age: 28,
    school: '다문대학교',
    email: 'wldn0000@naver.com',
  };

  createUser(user)