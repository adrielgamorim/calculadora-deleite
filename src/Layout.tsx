import { Button } from "@components/Button";
import { Navbar } from "@components/Navbar";
import { Outlet } from "react-router-dom";
import useAuth from "@auth/useAuth";
import { SignInWithGoogleButton } from "@components/SignInWithGoogleButton";
import { Loading } from "@components/Loading";
import { Footer } from "@components/Footer";


export function Layout() {
  const { user, loading, signInWithGoogle, signOut } = useAuth();

  if (loading) {
    return <div><Loading /></div>;
  }

  const userIsAuthorized =
    user?.email === import.meta.env.VITE_AUTHORIZED_USER ||
    user?.email === import.meta.env.VITE_APP_ADMIN;

  return (
    <>
      {user ? (
        userIsAuthorized ? (
          <>
            <Navbar />
            <main>
              <Outlet />
            </main>
          </>
        ) : (
          <div>
            <h1>Você não tem permissão para acessar esta página</h1>
            <Button label="Sair" onClick={async () => await signOut()} />
          </div>
        )
      ) : (
        <div>
          <h1>Faça o login para acessar esta página</h1>
          <SignInWithGoogleButton
            handleClick={async () => {
              try {
                await signInWithGoogle();
              } catch (err) {
                console.error(err);
              }
            }}
          />
        </div>
      )}
      <Footer />
    </>
  );
}

export default Layout;
