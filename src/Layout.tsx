import useAuth from "@auth/useAuth";
import { Outlet } from "react-router-dom";
import { Button } from "@components/atoms/Button";
import { Footer } from "@components/Footer";
import { Navbar } from "@components/Navbar";
import { Loading } from "@components/Loading";
import { SignInWithGoogleButton } from "@components/SignInWithGoogleButton";
import { ToastProvider } from "@contexts/ToastContext";
import { ConfirmDialog } from "@components/ConfirmDialog";
import * as S from "./Layout.styled";

export function Layout() {
  const { user, loading, signInWithGoogle, signOut, confirmLogoutModal, handleConfirmLogout } = useAuth();

  if (loading) {
    return <Loading />;
  }

  const whitelist: string[] = import.meta.env.VITE_WHITELIST.split(",");
  const userIsAuthorized = user?.email ? whitelist.includes(user.email) : false;

  return (
    <ToastProvider>
      {user ? (
        userIsAuthorized ? (
          <S.LayoutContainer>
            <Navbar />
            <S.MainContent>
              <Outlet />
            </S.MainContent>
            <Footer />
          </S.LayoutContainer>
        ) : (
          <S.UnauthorizedContainer>
            <S.UnauthorizedTitle>Você não tem permissão para acessar esta página</S.UnauthorizedTitle>
            <Button onClick={async () => await signOut()}>Sair</Button>
          </S.UnauthorizedContainer>
        )
      ) : (
        <S.LoginContainer>
          <S.LoginTitle>Faça o login para acessar esta página</S.LoginTitle>
          <SignInWithGoogleButton
            handleClick={async () => {
              try {
                await signInWithGoogle();
              } catch (err) {
                console.error(err);
              }
            }}
          />
        </S.LoginContainer>
      )}
      <ConfirmDialog
        isOpen={confirmLogoutModal.isOpen}
        onCancel={confirmLogoutModal.close}
        onConfirm={handleConfirmLogout}
        title="Confirmar Saída"
        message="Tem certeza que deseja sair?"
        variant="warning"
      />
    </ToastProvider>
  );
}

export default Layout;
