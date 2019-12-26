export default (typeName) => {
  return ({
    request: `${typeName}_REQUEST`,
    success: `${typeName}_SUCCESS`,
    failure: `${typeName}_FAILURE`
  })
};