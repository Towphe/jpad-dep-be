import { ErrorInfo } from "../types/error.js";

const errors: {[id: string]: ErrorInfo} = {};
errors['0001'] = {
    responseCode: 401,
    errorCode: '0001',
    defaultMessage: 'Unauthenticated. Please enter valid code.'
};
errors['0002'] = {
    responseCode: 403,
    errorCode: '0002',
    defaultMessage: 'Unauthorized. Forbidden access to resource.'
};
errors['0003'] = {
    responseCode: 400,
    errorCode: '0003',
    defaultMessage: 'Invalid request. Check your input.'
};
errors['0004'] = {
    responseCode: 500,
    errorCode: '0004',
    defaultMessage: 'Failure in LLM generation. Please try again.'
}
errors['9999'] = {
    responseCode: 500,
    errorCode: '9999',
    defaultMessage: 'Internal server error occured.'
};

export default errors;