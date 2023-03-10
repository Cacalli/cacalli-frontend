export default function Records() {
    const {
      token: [token, setToken],
    } = useOutletContext();
  
    return (
      <div className="flex">
        <Card>PACKAGE INFO</Card>
        <Card>NEXT PICKUP</Card>
        <Card>HISTORY PAYMENTS</Card>
      </div>
    );
  }
  