import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { 
  User, 
  Calendar, 
  Clock, 
  MapPin, 
  Phone, 
  Mail, 
  Edit3, 
  Download,
  CheckCircle,
  XCircle,
  Star,
  CreditCard,
  Settings,
  Bell,
  Shield,
  Camera,
  Save,
  Upload,
  Home
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

const Dashboard = () => {
  const [searchParams] = useSearchParams();
  const { user } = useAuth();
  const activeTab = searchParams.get('tab') || 'overview';
  const [isEditing, setIsEditing] = useState(false);
  const [avatarPreview, setAvatarPreview] = useState<string | null>(null);
  
  // User profile state
  const [profileData, setProfileData] = useState({
    name: 'John Doe',
    email: user?.email || 'john.doe@example.com',
    phone: '+91 98765 43210',
    address: '123 Main Street, Andheri West, Mumbai, Maharashtra 400001',
    city: 'Mumbai',
    pincode: '400001',
    preferences: 'Prefer morning slots, no loud equipment after 8 PM',
    emergencyContact: '+91 87654 32109',
    emergencyContactName: 'Jane Doe'
  });

  // Mock bookings data
  const bookings = [
    {
      id: 'TF001',
      service: 'Deep Home Cleaning',
      professional: 'Rajesh Kumar',
      date: '2024-01-15',
      time: '10:00 AM',
      status: 'confirmed',
      amount: 1200,
      address: '123 Main Street, Andheri West'
    },
    {
      id: 'TF002', 
      service: 'AC Repair',
      professional: 'Amit Patel',
      date: '2024-01-20',
      time: '2:00 PM',
      status: 'completed',
      amount: 800,
      address: '123 Main Street, Andheri West'
    },
    {
      id: 'TF003',
      service: 'Electrical Work',
      professional: 'Vikash Singh',
      date: '2024-01-25',
      time: '11:00 AM',
      status: 'pending',
      amount: 600,
      address: '123 Main Street, Andheri West'
    }
  ];

  const handleProfileUpdate = () => {
    setIsEditing(false);
    alert('Profile updated successfully!');
  };

  const handleAvatarChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setAvatarPreview(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'confirmed': return 'bg-blue-100 text-blue-800';
      case 'completed': return 'bg-green-100 text-green-800';
      case 'pending': return 'bg-yellow-100 text-yellow-800';
      case 'cancelled': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'confirmed': return <CheckCircle className="w-4 h-4" />;
      case 'completed': return <CheckCircle className="w-4 h-4" />;
      case 'pending': return <Clock className="w-4 h-4" />;
      case 'cancelled': return <XCircle className="w-4 h-4" />;
      default: return <Clock className="w-4 h-4" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 rounded-2xl p-8 text-white">
              <div className="flex items-center space-x-6">
                <div className="relative">
                  <Avatar className="w-20 h-20 border-4 border-white/20">
                    <AvatarImage src={avatarPreview || undefined} />
                    <AvatarFallback className="bg-white/20 text-white text-2xl font-bold">
                      {profileData.name.split(' ').map(n => n[0]).join('')}
                    </AvatarFallback>
                  </Avatar>
                </div>
                <div className="flex-1">
                  <h1 className="text-3xl font-bold mb-2">Welcome back, {profileData.name}!</h1>
                  <p className="text-primary-100 text-lg">Manage your bookings and profile settings</p>
                </div>
                <div className="text-right">
                  <Badge className="bg-white/20 text-white border-white/30 mb-2">
                    <Shield className="w-3 h-3 mr-1" />
                    Verified Member
                  </Badge>
                  <p className="text-primary-100">Member since Jan 2024</p>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Calendar className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{bookings.length}</h3>
                <p className="text-gray-600">Total Bookings</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CheckCircle className="w-6 h-6 text-green-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{bookings.filter(b => b.status === 'completed').length}</h3>
                <p className="text-gray-600">Completed</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Clock className="w-6 h-6 text-yellow-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">{bookings.filter(b => b.status === 'pending' || b.status === 'confirmed').length}</h3>
                <p className="text-gray-600">Upcoming</p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <CreditCard className="w-6 h-6 text-purple-600" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900">₹{bookings.reduce((sum, b) => sum + b.amount, 0)}</h3>
                <p className="text-gray-600">Total Spent</p>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <Tabs value={activeTab} className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="bookings">My Bookings</TabsTrigger>
              <TabsTrigger value="profile">Profile</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Recent Bookings */}
                <Card>
                  <CardHeader>
                    <CardTitle>Recent Bookings</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {bookings.slice(0, 3).map((booking) => (
                      <div key={booking.id} className="flex items-center space-x-4 p-3 bg-gray-50 rounded-lg">
                        <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                          {getStatusIcon(booking.status)}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-medium">{booking.service}</h4>
                          <p className="text-sm text-gray-600">{booking.professional}</p>
                          <p className="text-xs text-gray-500">{new Date(booking.date).toLocaleDateString()} at {booking.time}</p>
                        </div>
                        <Badge className={getStatusColor(booking.status)}>
                          {booking.status}
                        </Badge>
                      </div>
                    ))}
                    <Button variant="outline" className="w-full mt-4">
                      View All Bookings
                    </Button>
                  </CardContent>
                </Card>

                {/* Quick Actions */}
                <Card>
                  <CardHeader>
                    <CardTitle>Quick Actions</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button className="w-full justify-start" onClick={() => window.location.href = '/services'}>
                      <Calendar className="w-4 h-4 mr-2" />
                      Book New Service
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Star className="w-4 h-4 mr-2" />
                      Rate Recent Service
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Download className="w-4 h-4 mr-2" />
                      Download Invoices
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      <Bell className="w-4 h-4 mr-2" />
                      Notification Settings
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="bookings" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>All Bookings</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {bookings.map((booking) => (
                      <Card key={booking.id} className="border-l-4 border-l-primary-500">
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="flex items-center space-x-4 mb-3">
                                <h3 className="text-lg font-semibold">{booking.service}</h3>
                                <Badge className={getStatusColor(booking.status)}>
                                  {getStatusIcon(booking.status)}
                                  <span className="ml-1">{booking.status}</span>
                                </Badge>
                              </div>
                              
                              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
                                <div className="flex items-center space-x-2">
                                  <User className="w-4 h-4 text-gray-500" />
                                  <span className="text-sm">{booking.professional}</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <Calendar className="w-4 h-4 text-gray-500" />
                                  <span className="text-sm">{new Date(booking.date).toLocaleDateString()}</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <Clock className="w-4 h-4 text-gray-500" />
                                  <span className="text-sm">{booking.time}</span>
                                </div>
                                <div className="flex items-center space-x-2">
                                  <CreditCard className="w-4 h-4 text-gray-500" />
                                  <span className="text-sm font-medium">₹{booking.amount}</span>
                                </div>
                              </div>
                              
                              <div className="flex items-center space-x-2 text-sm text-gray-600">
                                <MapPin className="w-4 h-4" />
                                <span>{booking.address}</span>
                              </div>
                            </div>
                            
                            <div className="flex space-x-2 ml-4">
                              <Button size="sm" variant="outline">
                                <Download className="w-4 h-4" />
                              </Button>
                              {booking.status === 'confirmed' && (
                                <Button size="sm" variant="outline">
                                  <Edit3 className="w-4 h-4" />
                                </Button>
                              )}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="profile" className="space-y-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Profile Picture Section */}
                <Card>
                  <CardHeader>
                    <CardTitle>Profile Picture</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center space-y-4">
                    <Avatar className="w-32 h-32 mx-auto">
                      <AvatarImage src={avatarPreview || undefined} />
                      <AvatarFallback className="text-2xl font-bold bg-primary-100 text-primary-600">
                        {profileData.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleAvatarChange}
                        className="hidden"
                        id="avatar-upload"
                      />
                      <label htmlFor="avatar-upload">
                        <Button variant="outline" className="cursor-pointer" asChild>
                          <span>
                            <Camera className="w-4 h-4 mr-2" />
                            Change Photo
                          </span>
                        </Button>
                      </label>
                    </div>
                  </CardContent>
                </Card>

                {/* Profile Information */}
                <div className="lg:col-span-2">
                  <Card>
                    <CardHeader className="flex flex-row items-center justify-between">
                      <CardTitle>Profile Information</CardTitle>
                      <Button 
                        variant="outline" 
                        size="sm"
                        onClick={() => setIsEditing(!isEditing)}
                      >
                        <Edit3 className="w-4 h-4 mr-2" />
                        {isEditing ? 'Cancel' : 'Edit Profile'}
                      </Button>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {isEditing ? (
                        <div className="space-y-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="name">Full Name *</Label>
                              <Input
                                id="name"
                                value={profileData.name}
                                onChange={(e) => setProfileData({...profileData, name: e.target.value})}
                                placeholder="Enter your full name"
                              />
                            </div>
                            <div>
                              <Label htmlFor="phone">Phone Number *</Label>
                              <Input
                                id="phone"
                                value={profileData.phone}
                                onChange={(e) => setProfileData({...profileData, phone: e.target.value})}
                                placeholder="Enter your phone number"
                              />
                            </div>
                            <div>
                              <Label htmlFor="city">City *</Label>
                              <Input
                                id="city"
                                value={profileData.city}
                                onChange={(e) => setProfileData({...profileData, city: e.target.value})}
                                placeholder="Enter your city"
                              />
                            </div>
                            <div>
                              <Label htmlFor="pincode">Pincode *</Label>
                              <Input
                                id="pincode"
                                value={profileData.pincode}
                                onChange={(e) => setProfileData({...profileData, pincode: e.target.value})}
                                placeholder="Enter your pincode"
                              />
                            </div>
                          </div>
                          
                          <div>
                            <Label htmlFor="address">Complete Address *</Label>
                            <Textarea
                              id="address"
                              value={profileData.address}
                              onChange={(e) => setProfileData({...profileData, address: e.target.value})}
                              rows={3}
                              placeholder="Enter your complete address"
                            />
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div>
                              <Label htmlFor="emergencyContactName">Emergency Contact Name</Label>
                              <Input
                                id="emergencyContactName"
                                value={profileData.emergencyContactName}
                                onChange={(e) => setProfileData({...profileData, emergencyContactName: e.target.value})}
                                placeholder="Emergency contact name"
                              />
                            </div>
                            <div>
                              <Label htmlFor="emergencyContact">Emergency Contact Number</Label>
                              <Input
                                id="emergencyContact"
                                value={profileData.emergencyContact}
                                onChange={(e) => setProfileData({...profileData, emergencyContact: e.target.value})}
                                placeholder="Emergency contact number"
                              />
                            </div>
                          </div>
                          
                          <div>
                            <Label htmlFor="preferences">Service Preferences</Label>
                            <Textarea
                              id="preferences"
                              value={profileData.preferences}
                              onChange={(e) => setProfileData({...profileData, preferences: e.target.value})}
                              rows={3}
                              placeholder="Any specific preferences for services"
                            />
                          </div>
                          
                          <Button onClick={handleProfileUpdate} className="w-full">
                            <Save className="w-4 h-4 mr-2" />
                            Save Changes
                          </Button>
                        </div>
                      ) : (
                        <div className="space-y-6">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-4">
                              <div className="flex items-center space-x-3">
                                <Mail className="w-5 h-5 text-gray-500" />
                                <div>
                                  <p className="text-sm text-gray-600">Email</p>
                                  <p className="font-medium">{profileData.email}</p>
                                </div>
                              </div>
                              <div className="flex items-center space-x-3">
                                <Phone className="w-5 h-5 text-gray-500" />
                                <div>
                                  <p className="text-sm text-gray-600">Phone</p>
                                  <p className="font-medium">{profileData.phone}</p>
                                </div>
                              </div>
                              <div className="flex items-center space-x-3">
                                <MapPin className="w-5 h-5 text-gray-500" />
                                <div>
                                  <p className="text-sm text-gray-600">City</p>
                                  <p className="font-medium">{profileData.city} - {profileData.pincode}</p>
                                </div>
                              </div>
                            </div>
                            <div className="space-y-4">
                              <div className="flex items-start space-x-3">
                                <Home className="w-5 h-5 text-gray-500 mt-1" />
                                <div>
                                  <p className="text-sm text-gray-600">Address</p>
                                  <p className="font-medium">{profileData.address}</p>
                                </div>
                              </div>
                              <div className="flex items-center space-x-3">
                                <User className="w-5 h-5 text-gray-500" />
                                <div>
                                  <p className="text-sm text-gray-600">Emergency Contact</p>
                                  <p className="font-medium">{profileData.emergencyContactName} - {profileData.emergencyContact}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                          
                          <div className="pt-4 border-t">
                            <div className="flex items-start space-x-3">
                              <Settings className="w-5 h-5 text-gray-500 mt-1" />
                              <div>
                                <p className="text-sm text-gray-600">Service Preferences</p>
                                <p className="font-medium">{profileData.preferences}</p>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </CardContent>
                  </Card>
                </div>
              </div>

              {/* Additional Profile Actions */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card>
                  <CardContent className="p-6 text-center">
                    <Download className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Download Data</h3>
                    <p className="text-sm text-gray-600 mb-4">Export your account data</p>
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      Export Data
                    </Button>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6 text-center">
                    <Shield className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Privacy Settings</h3>
                    <p className="text-sm text-gray-600 mb-4">Manage your privacy preferences</p>
                    <Button variant="outline" size="sm">
                      <Settings className="w-4 h-4 mr-2" />
                      Privacy
                    </Button>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6 text-center">
                    <Bell className="h-12 w-12 text-primary-600 mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Notifications</h3>
                    <p className="text-sm text-gray-600 mb-4">Configure notification settings</p>
                    <Button variant="outline" size="sm">
                      <Bell className="w-4 h-4 mr-2" />
                      Configure
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="settings" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Notification Settings</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span>Email Notifications</span>
                      <input type="checkbox" defaultChecked className="toggle" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span>SMS Notifications</span>
                      <input type="checkbox" defaultChecked className="toggle" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span>Booking Reminders</span>
                      <input type="checkbox" defaultChecked className="toggle" />
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Account Security</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button variant="outline" className="w-full justify-start">
                      Change Password
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      Two-Factor Authentication
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      Download Data
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Dashboard;
