import { auth, signOut } from '@/auth';

const SettingPage = async () => {
  const session = await auth();

  session?.user.role;

  return (
    <div>
      {JSON.stringify(session)}
      <form
        action={async () => {
          'use server';

          await signOut();
        }}
      >
        <button>Sign out</button>
      </form>
    </div>
  );
};

export default SettingPage;
