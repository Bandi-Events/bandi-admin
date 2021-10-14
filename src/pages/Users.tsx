import { useEffect, useState } from 'react';

import UserTable from 'components/UsersTable';
import { getAllUsers } from 'services/users';
import { User } from 'interfaces/User';

const Users: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const data = await getAllUsers();
        setUsers(data);
      } catch (error) {
        console.log(`Fetch failed: ${error}`);
      }
    }

    fetchUsers();
  }, []);

  return (
    <div className="flex flex-wrap">
      <div className="w-full px-4 mt-8">
        <UserTable color="light" users={users} />
      </div>
    </div>
  );
};

export default Users;
