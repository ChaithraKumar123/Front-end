
import {CognitoUserPool} from 'amazon-cognito-identity-js';

const poolData = {
  UserPoolId: 'ap-southeast-2_QygHWSotF',
  ClientId: '1nks9b7gmjhh6c7dlvmasjpf4s'
};

export default new CognitoUserPool(poolData);