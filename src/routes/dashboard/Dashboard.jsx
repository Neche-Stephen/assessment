import React, {useState, useEffect} from 'react';
import SearchInput from '../../components/search-input-field/SearchInput';
import styles from "./Dashboard.module.scss";

import { getUsers } from '../../services/userService';

import Sidebar from '../../components/sidebar/Sidebar';
import UsersTable from '../../components/users-table/UsersTable';

import IMAGES from "../../assets/dashboard/"

export default function Dashboard() {

const [users, setUsers] = useState([]);
const [search, setSearch] = useState('');
const [tableSearch, setTableSearch] = useState(''); // Search value for the table
const [sortBy, setSortBy] = useState('firstName'); // default sorting by first name
const [sortOrder, setSortOrder] = useState('asc'); // default ascending order
const [page, setPage] = useState(1);
const [totalUsers, setTotalUsers] = useState(0);
const [limit, setLimit] = useState(8); // limit of users per page

useEffect(() => {
    const fetchData = async () => {
      const data = await getUsers(limit, (page - 1) * limit, search, sortBy, sortOrder, tableSearch);
      setUsers(data.users);
      setTotalUsers(data.total);
    };

    fetchData();
  }, [search, sortBy, sortOrder, page, limit, tableSearch]);

  const handleSearchChange = (e) => {
    const value = e.target.value;
    // Remove all spaces from the input
    const noSpacesValue = value.replace(/\s/g, '');
    setSearch(noSpacesValue);
    setPage(1); // Reset to first page when searching
  };

  const handleTableSearchChange = (e) => { // Function to handle search in the table
    const value = e.target.value;
    // Remove all spaces from the input
    const noSpacesValue = value.replace(/\s/g, '');
    setTableSearch(noSpacesValue);
    setPage(1); // Reset to first page when searching
    };

  const handleSortChange = (newSortBy) => {
    console.log("Sortby is called", newSortBy);
    if (sortBy === newSortBy) {
      // Toggle sort order
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
        console.log("and set")
      setSortBy(newSortBy);
      setSortOrder('asc'); // Reset to ascending order for new sortBy
    }
  };

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };


  return (
    <div className='border flex'>

        {/* <div className=''> */}
            <Sidebar />
        {/* </div> */}

       <div className='border px-10 w-10/12 pt-8 bg-[#FAFBFF] pb-12'>

            <div className='flex flex-wrap justify-between mb-8'>
                <div>Hello Evano 👋🏼,</div>
                <div>
                <SearchInput 
                    searchValue={search} 
                    onSearchChange={handleSearchChange} 
                    placeholder="Search" 
            />
                </div>
            </div>

             {/* Info Widget */}

            <div className='flex flex-wrap justify-between bg-white p-4 shadow mb-8'>
                <div className='flex items-center gap-4'>
                    <div><img src={IMAGES.MEMBERS} alt="" /></div>
                    <div className={`${styles.info_widget_details}`}>
                        <div className={`${styles.info_widget_title}`}>Total Users</div>
                        <div className={`${styles.info_widget_quantity}`}>{totalUsers}</div>
                        <div className={`${styles.info_widget_stats}`}>
                            <img src={IMAGES.ARROW_UP} alt="" />
                            <div className={`${styles.info_widget_stat}`}>16%</div>
                            <div className={`${styles.info_widget_date}`}>this month</div>
                        </div>
                    </div>

                </div>
                <div className='flex items-center gap-4'>
                    <div><img src={IMAGES.MEMBERS} alt="" /></div>
                    <div className={`${styles.info_widget_details}`}>
                        <div className={`${styles.info_widget_title}`}>Members</div>
                        <div className={`${styles.info_widget_quantity}`}>193</div>
                        <div className={`${styles.info_widget_stats}`}>
                            <img src={IMAGES.ARROW_UP} alt="" />
                            <div className={`${styles.info_widget_stat}`}>16%</div>
                            <div className={`${styles.info_widget_date}`}>this month</div>
                        </div>
                    </div>

                </div>
                <div className='flex items-center gap-4'>
                    <div><img src={IMAGES.MEMBERS} alt="" /></div>
                    <div className={`${styles.info_widget_details}`}>
                        <div className={`${styles.info_widget_title}`}>Active Now</div>
                        <div className={`${styles.info_widget_quantity}`}>189</div>
                        <div className={`${styles.info_widget_stats}`}>
                            <img src={IMAGES.PICTURES} alt="" />
                        </div>
                    </div>

                </div>
            </div>

            {/* Users Table */}
            <UsersTable 
            
                users={users}
                sortBy={sortBy} 
                sortOrder={sortOrder} 
                onSortChange={handleSortChange} 
                page={page} 
                totalUsers={totalUsers} 
                limit={limit}
                onPageChange={handlePageChange} 
                handleTableSearchChange={handleTableSearchChange}
                tableSearch={tableSearch}

                
            />
       </div>

      

    </div>
  )
}
