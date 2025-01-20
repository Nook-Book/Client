/** 아이디가 영문 숫자를 포함한 10자 이내인지 확인하는 정규식 */
export const idRegex = /^(?=.*[a-zA-Z])(?=.*\d)[a-zA-Z\d]{1,10}$/;

/** 아이디가 숫자로만 이루어져있는지 확인하는 정규식 */
export const idNumberRegex = /^\d+$/;
