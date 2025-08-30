import useAuth from "@auth/useAuth";
import { Outlet } from "react-router-dom";
import { Button } from "@components/Button";
import { Footer } from "@components/Footer";
import { Navbar } from "@components/Navbar";
import { Loading } from "@components/Loading";
import { SignInWithGoogleButton } from "@components/SignInWithGoogleButton";

export function Layout() {
  const { user, loading, signInWithGoogle, signOut } = useAuth();

  if (loading) {
    return <Loading />;
  }

  const whitelist: string[] = import.meta.env.VITE_WHITELIST.split(",");
  const userIsAuthorized = user?.email ? whitelist.includes(user.email) : false;

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
