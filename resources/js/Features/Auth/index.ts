// export all the components, hooks, types, etc from this feature
export { default as LoginPage } from './pages/LoginPage';
export { default as RegisterPage } from './pages/RegisterPage';
export { default as ForgotPasswordPage } from './pages/ForgotPasswordPage';

export { AuthLayout } from './layouts/AuthLayout';
export { AuthSideHero } from './components/AuthSideHero';

export { loginSchema } from './schemas/auth.schema';
export { registerSchema } from './schemas/auth.schema';
export { forgotPasswordSchema } from './schemas/auth.schema';

export { useLogin } from './hooks/useLogin';
export { useRegister } from './hooks/useRegister';
export { useForgotPassword } from './hooks/useForgotPassword';

export type { LoginFormValues } from './schemas/auth.schema';
