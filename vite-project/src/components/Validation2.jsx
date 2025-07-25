import * as Yup from 'yup';

export const validationLogInSchema = Yup.object().shape({
    email: Yup.string().matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Invalid email format').email('Invalid email address').required('Email is required'),
    password: Yup.string().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, 'Password must contain at least 8 characters, one uppercase, one lowercase, one number, and one special character').min(6, 'Password must be at least 6 characters').required('Password is required'),
    confirmPassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match').required('Confirm Password is required'),

})
