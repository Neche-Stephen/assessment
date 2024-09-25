import React from 'react';
import SearchInput from '../search-input-field/SearchInput';
import CustomSelect from '../CustomSelect/CustomSelect';

import styles from './UsersTable.module.scss';

export default function UsersTable({ users, sortBy, sortOrder, onSortChange, page, totalUsers, limit, onPageChange, handleTableSearchChange, tableSearch }) {
    

const ActiveButton = () => {
    return (
        <button className={`${styles.active_btn}`}>Active</button>
    )
}

const InactiveButton = () => {
    return (
        <button className={`${styles.inactive_btn}`}>Inactive</button>
    )
}

const handleSortClick = (field) => {
    onSortChange(field);
  };

  const totalPages = Math.ceil(totalUsers / limit);


    // In absence of active property, Function to randomly choose between Active Button and InactiveButton
    
 
  return (
    <div className={`${styles.table_container} bg-white p-8`}>

        <div className={`${styles.all_users}`}>All Users</div>
        <div className='flex flex-wrap justify-between gap-2 mb-8'>
            <div className={`${styles.active_members}`}>Active Members</div>
            <div>
                <SearchInput 
                    searchValue={tableSearch} 
                    onSearchChange={handleTableSearchChange} 
                    placeholder="Search" 
                    bg = '#F9FBFF'
                />
            </div>
            <CustomSelect options={['firstName', 'lastName', 'email']} prefix="Sort by:" defaultOption="firstName" onChange={handleSortClick}/>

        </div>

        <div className='overflow-x-auto'>
            <table className={`${styles.users_table} mb-8 min-w-full`}>
                <thead>
                    <tr>
                        <th>Users Name</th>
                        <th>Company</th>
                        <th>Phone Number</th>
                        <th>Email</th>
                        <th>Country</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                {users.length > 0 ? (
                        users.map((user) => (
                            <tr key={user.id}>
                                <td>{`${user.firstName} ${user.lastName}`}</td>
                                <td>{user.company.name}</td>
                                <td>{user.phone}</td>
                                <td>{user.email}</td>
                                <td>{user.address.country}</td>
                                <td>{user.role === 'admin' ? <InactiveButton /> : <ActiveButton />}</td>
                            </tr>
                        ))
                    ) : (
                    <tr>
                        <td colSpan="6" style={{ textAlign: 'center' }}>No users available.</td>
                    </tr>
                    )}
                </tbody>
            </table>
        </div>

        {/* Pagination Controls */}
       <div className='flex items-center justify-between mt-8 lg:mt-0'>
            <div className='text-[#B5B7C0] hidden sm:block'>
                Showing data {Math.min((page - 1) * limit + 1, totalUsers)} to {Math.min(page * limit, totalUsers)} of {totalUsers.toLocaleString()} entries
            </div>
            <div className="flex justify-center items-center space-x-1">
                <button
                    className={`px-3 py-1 rounded ${page === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-gray-800'}`}
                    onClick={() => onPageChange(page - 1)}
                    disabled={page === 1}
                >
                    &lt;
                </button>

                {Array.from({ length: totalPages }, (_, index) => {
                    const pageNum = index + 1;
                    return (
                    <button
                        key={pageNum}
                        onClick={() => onPageChange(pageNum)}
                        className={`px-3 py-1 rounded ${
                        page === pageNum ? 'bg-[#5932EA] text-white' : 'text-gray-800 hover:bg-gray-200'
                        }`}
                    >
                        {pageNum}
                    </button>
                    );
                }).filter((_, index) => Math.abs(index + 1 - page) <= 2 || index === 0 || index === totalPages - 1)}

                <button
                    className={`px-3 py-1 rounded ${page === totalPages ? 'text-gray-400 cursor-not-allowed' : 'text-gray-800'}`}
                    onClick={() => onPageChange(page + 1)}
                    disabled={page === totalPages}
                >
                    &gt;
                </button>
            </div>
       </div>


    </div>
  )
}
