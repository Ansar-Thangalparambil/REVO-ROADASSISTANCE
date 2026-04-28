export default function RecentBookings() {
  return (
    <div className="recent-bookings">
      <div className="section-header">
        <h3 className="section-title">Recent Activity</h3>
        <a href="#" className="view-all">View All →</a>
      </div>

      <div className="empty-state">
        <div className="empty-icon">📋</div>
        <h4>No activity yet</h4>
        <p>Your recent bookings and activities will appear here</p>
      </div>
    </div>
  );
}
