import React, { useState } from 'react';
import Header from '@/components/Header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useAuth } from '@/contexts/AuthContext';
import { 
  Calendar, 
  Clock, 
  DollarSign, 
  Star, 
  Users, 
  MapPin,
  Phone,
  CheckCircle,
  XCircle,
  AlertCircle
} from 'lucide-react';

const ProfessionalDashboard = () => {
  const { user } = useAuth();
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { title: 'Total Bookings', value: '156', icon: Calendar, color: 'text-blue-600' },
    { title: 'Active Jobs', value: '8', icon: Clock, color: 'text-green-600' },
    { title: 'Monthly Earnings', value: '₹45,200', icon: DollarSign, color: 'text-purple-600' },
    { title: 'Average Rating', value: '4.8', icon: Star, color: 'text-yellow-600' },
  ];

  const recentBookings = [
    {
      id: 'TF001',
      customer: 'Amit Sharma',
      service: 'Plumbing Repair',
      date: '2024-01-15',
      time: '2:00 PM',
      location: 'Bandra, Mumbai',
      status: 'confirmed',
      amount: '₹800'
    },
    {
      id: 'TF002',
      customer: 'Priya Singh',
      service: 'AC Service',
      date: '2024-01-16',
      time: '10:00 AM',
      location: 'Andheri, Mumbai',
      status: 'pending',
      amount: '₹1,200'
    },
    {
      id: 'TF003',
      customer: 'Rohit Patel',
      service: 'Electrical Work',
      date: '2024-01-14',
      time: '4:00 PM',
      location: 'Powai, Mumbai',
      status: 'completed',
      amount: '₹650'
    }
  ];

  const getStatusBadge = (status) => {
    switch (status) {
      case 'confirmed':
        return <Badge className="bg-green-100 text-green-800"><CheckCircle className="w-3 h-3 mr-1" />Confirmed</Badge>;
      case 'pending':
        return <Badge className="bg-yellow-100 text-yellow-800"><AlertCircle className="w-3 h-3 mr-1" />Pending</Badge>;
      case 'completed':
        return <Badge className="bg-blue-100 text-blue-800"><CheckCircle className="w-3 h-3 mr-1" />Completed</Badge>;
      case 'cancelled':
        return <Badge className="bg-red-100 text-red-800"><XCircle className="w-3 h-3 mr-1" />Cancelled</Badge>;
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  if (!user || user.type !== 'professional') {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Access Denied</h1>
          <p className="text-gray-600">This dashboard is only accessible to professionals.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">
            Welcome back, {user.name}!
          </h1>
          <p className="text-gray-600">Manage your bookings and track your performance</p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index}>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-gray-600">{stat.title}</p>
                    <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  </div>
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Navigation Tabs */}
        <div className="border-b border-gray-200 mb-8">
          <nav className="-mb-px flex space-x-8">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'bookings', label: 'Bookings' },
              { id: 'profile', label: 'Profile' },
              { id: 'earnings', label: 'Earnings' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-2 px-1 border-b-2 font-medium text-sm ${
                  activeTab === tab.id
                    ? 'border-primary-500 text-primary-600'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Content */}
        {activeTab === 'overview' && (
          <div className="space-y-8">
            {/* Recent Bookings */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Bookings</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Booking ID</TableHead>
                      <TableHead>Customer</TableHead>
                      <TableHead>Service</TableHead>
                      <TableHead>Date & Time</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentBookings.map((booking) => (
                      <TableRow key={booking.id}>
                        <TableCell className="font-medium">{booking.id}</TableCell>
                        <TableCell>{booking.customer}</TableCell>
                        <TableCell>{booking.service}</TableCell>
                        <TableCell>
                          <div>
                            <div>{booking.date}</div>
                            <div className="text-sm text-gray-500">{booking.time}</div>
                          </div>
                        </TableCell>
                        <TableCell>{getStatusBadge(booking.status)}</TableCell>
                        <TableCell className="font-medium">{booking.amount}</TableCell>
                        <TableCell>
                          <Button size="sm" variant="outline">
                            View Details
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Quick Actions */}
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6 text-center">
                  <Calendar className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">View Schedule</h3>
                  <p className="text-sm text-gray-600 mb-4">Check your upcoming appointments</p>
                  <Button variant="outline" size="sm">View Calendar</Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <Users className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Customer Reviews</h3>
                  <p className="text-sm text-gray-600 mb-4">Read feedback from customers</p>
                  <Button variant="outline" size="sm">View Reviews</Button>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6 text-center">
                  <DollarSign className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Payment History</h3>
                  <p className="text-sm text-gray-600 mb-4">Track your earnings and payments</p>
                  <Button variant="outline" size="sm">View Payments</Button>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {activeTab === 'profile' && (
          <Card>
            <CardHeader>
              <CardTitle>Professional Profile</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    defaultValue={user.name}
                    className="w-full p-3 border border-gray-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    defaultValue={user.email}
                    className="w-full p-3 border border-gray-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    defaultValue={user.phone}
                    className="w-full p-3 border border-gray-300 rounded-lg"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Profession
                  </label>
                  <input
                    type="text"
                    defaultValue={user.profession}
                    className="w-full p-3 border border-gray-300 rounded-lg"
                  />
                </div>
              </div>
              <Button>Update Profile</Button>
            </CardContent>
          </Card>
        )}
      </div>
    </div>
  );
};

export default ProfessionalDashboard;