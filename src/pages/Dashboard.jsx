import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell
} from "recharts";

const visitorsData = [
  { name: "Mon", visitors: 400 },
  { name: "Tue", visitors: 600 },
  { name: "Wed", visitors: 800 },
  { name: "Thu", visitors: 500 },
  { name: "Fri", visitors: 900 },
  { name: "Sat", visitors: 700 },
  { name: "Sun", visitors: 1000 }
];

const trafficData = [
  { name: "Organic", value: 45 },
  { name: "Social", value: 25 },
  { name: "Direct", value: 20 },
  { name: "Referral", value: 10 }
];

const COLORS = ["#1e3a8a", "#f59e0b", "#111827", "#6c757d"];

function Dashboard() {
  return (
    <section className="container py-5">
      <div className="text-center mb-5">
        <h1 className="fw-bold">Website Analytics Dashboard</h1>
        <p className="text-muted">
          Overview of website performance metrics.
        </p>
      </div>

      <div className="row g-4">

        <div className="row g-4 mb-5">

        <div className="col-md-3">
            <div className="card shadow-sm p-4 text-center">
            <h6 className="text-muted">Total Visitors</h6>
            <h3 className="fw-bold">12,480</h3>
            </div>
        </div>

        <div className="col-md-3">
            <div className="card shadow-sm p-4 text-center">
            <h6 className="text-muted">Bounce Rate</h6>
            <h3 className="fw-bold">38%</h3>
            </div>
        </div>

        <div className="col-md-3">
            <div className="card shadow-sm p-4 text-center">
            <h6 className="text-muted">Conversion Rate</h6>
            <h3 className="fw-bold">4.7%</h3>
            </div>
        </div>

        <div className="col-md-3">
            <div className="card shadow-sm p-4 text-center">
            <h6 className="text-muted">Avg. Session</h6>
            <h3 className="fw-bold">3m 24s</h3>
            </div>
        </div>

        </div>

        {/* Visitors Chart */}
        <div className="col-md-8">
          <div className="card shadow-sm p-4">
            <h5 className="fw-bold mb-3">Weekly Visitors</h5>
            <ResponsiveContainer width="100%" height={300}>
              <LineChart data={visitorsData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Line
                  type="monotone"
                  dataKey="visitors"
                  stroke="#1e3a8a"
                  strokeWidth={3}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Traffic Sources */}
        <div className="col-md-4">
          <div className="card shadow-sm p-4">
            <h5 className="fw-bold mb-3">Traffic Sources</h5>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={trafficData}
                  dataKey="value"
                  nameKey="name"
                  outerRadius={100}
                >
                  {trafficData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>
    </section>
  );
}

export default Dashboard;