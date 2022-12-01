import useGetUsers from '../../../../useHooks/useGetUsers/useGetUsers';

const AllBuyers = () => {

    const { users } = useGetUsers()
    const buyers = users?.filter(el => el.role === "Buyer")
    console.log(buyers);

    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            buyers?.length > 0 &&
                            buyers.map((buyer, i) => <tr key={i}>
                                <th>{i + 1}</th>
                                <td>{buyer?.name}</td>
                                <td>{buyer?.email}</td>
                                <td>{buyer?.role}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllBuyers;