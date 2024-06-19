import './error_message.css';

function ErrorMessage():JSX.Element | null {
  //const error = useAppSelector((state) => state.error);
  const error = null;
  return error
    ? <div className='error-message'>{error}</div>
    : null;
}

export default ErrorMessage;
