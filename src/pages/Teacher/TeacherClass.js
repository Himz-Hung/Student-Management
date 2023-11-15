import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import LayoutTeacher from "../../component/Layout/LayoutTeacher";
import { Button, Input, Modal, Space, Switch, Table } from "antd";
import { SearchOutlined } from '@ant-design/icons';
import Highlighter from "react-highlight-words";
export default function TeacherClass(props) {
    const [use, setUser] = useState({})
    const [classes, setClasses] = useState([]);
    const [students, setStudents] = useState([]);
    const [foundUser, setFoundUser] = useState(null);
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef(null);
    const [orderModalDetail, setModalOrderDetail] = useState(false);
    const navigate = useNavigate();
    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };
    const handleReset = (clearFilters) => {
        clearFilters();
        setSearchText('');
    };
    const getData = () =>{
        fetch("http://localhost:8080/user")
            .then(res => res.json())
            .then(res => {
                if (res) {
                    res.forEach(e => {
                        if (e.id === use.id) {
                            setFoundUser(e)
                            return
                        }
                    });
                }
            })
    }
    const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters, close }) => (
            <div
                style={{
                    padding: 8,
                }}
                onKeyDown={(e) => e.stopPropagation()}
            >
                <Input
                    ref={searchInput}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{
                        marginBottom: 8,
                        display: 'block',
                    }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Search
                    </Button>
                    <Button
                        onClick={() => clearFilters && handleReset(clearFilters)}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Reset
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            confirm({
                                closeDropdown: false,
                            });
                            setSearchText(selectedKeys[0]);
                            setSearchedColumn(dataIndex);
                        }}
                    >
                        Filter
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            close();
                        }}
                    >
                        close
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered) => (
            <SearchOutlined
                style={{
                    color: filtered ? '#1677ff' : undefined,
                }}
            />
        ),
        onFilter: (value, record) =>
            record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownOpenChange: (visible) => {
            if (visible) {
                setTimeout(() => searchInput.current?.select(), 100);
            }
        },
        render: (text) =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{
                        backgroundColor: '#ffc069',
                        padding: 0,
                    }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ''}
                />
            ) : (
                text
            ),
    });
    useEffect(() => {
        if (localStorage.length === 0) {
            alert('please login first!')
            navigate('/login')
        }else{
            if (!localStorage.getItem('TEACHER')) {
                alert("please login as TEACHER!");
                navigate("/login");
            }
        }
    }, [])
    useEffect(() => {
        getData()
    }, [use])
    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('TEACHER')))
    }, [])
    useEffect(() => {
        const fetchClasses = async () => {
            try {
                const response = await fetch(`http://localhost:8080/class`);
                if (response.ok) {
                    const data = await response.json();
                    const filteredClasses = data.filter((classInfo) => classInfo.teacherID === foundUser.id);
                    setClasses(filteredClasses); // Cập nhật danh sách lớp học trong state classes
                } else {
                    throw new Error('Network response was not ok');
                }
            } catch (error) {
                console.error('There has been a problem with your fetch operation:', error);
            }
        };

        fetchClasses();


    }, [use, foundUser]);

    const columns = [
        {
            title: 'Id',
            dataIndex: 'id',
            key: 'id',

            ...getColumnSearchProps('id'),
        },
        {
            title: 'Name',
            dataIndex: 'subjectID',
            key: 'subjectID',

            ...getColumnSearchProps('subjectID'),
        },

    ];
    const columnsStudents = [
        {
            title: 'Id',
            dataIndex: 'studentId',
            key: 'studentId',

            ...getColumnSearchProps('studentId'),
        },
        {
            title: 'Name',
            dataIndex: 'studentName',
            key: 'studentName',

            ...getColumnSearchProps('studentName'),
        },


    ];
    const openModal = () => {
        setModalOrderDetail(true);
    }
    console.log(students);
    console.log(orderModalDetail);
    return (
        <>
            <LayoutTeacher>

                <Table columns={columns}
                    rowKey="id"
                    bordered

                    pagination={{
                        showSizeChanger: true, // Hiển thị dropdown cho phép chọn số lượng dữ liệu
                        pageSizeOptions: ['10', '20', '50', '100'], // Các tùy chọn số lượng dữ liệu
                    }}
                    dataSource={classes} />
            </LayoutTeacher>
        </>
    )
}