import React from 'react';
// import UserProfile from './UserProfile';

const UserProfile = () => {
    return (
        <div className="container mx-auto p-4">
            <div className="flex flex-wrap md:flex-nowrap gap-4">
                <div className="w-full md:w-1/3 mb-6">
                    <div className="bg-white rounded-lg shadow p-6 text-center">
                        <img
                            src="https://bootdey.com/img/Content/avatar/avatar7.png"
                            alt="Profile"
                            className="rounded-full w-32 mx-auto mb-4"
                        />
                        <h4 className="text-xl font-bold">John Doe</h4>
                        <p className="text-gray-500">Full Stack Developer</p>
                        <p className="text-gray-400 text-sm">Bay Area, San Francisco, CA</p>
                        <div className="mt-3 flex justify-center gap-2">
                            <button className="btn btn-primary bg-blue-500 text-white px-4 py-2 rounded">Follow</button>
                            <button className="btn btn-outline-primary border border-blue-500 text-blue-500 px-4 py-2 rounded">Message</button>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow mt-4">
                        <ul className="divide-y divide-gray-200">
                            <li className="p-4 flex justify-between items-center">
                                <h6 className="font-semibold text-gray-700">Website</h6>
                                <span className="text-gray-500">https://bootdey.com</span>
                            </li>
                            <li className="p-4 flex justify-between items-center">
                                <h6 className="font-semibold text-gray-700">Github</h6>
                                <span className="text-gray-500">bootdey</span>
                            </li>
                            <li className="p-4 flex justify-between items-center">
                                <h6 className="font-semibold text-gray-700">Twitter</h6>
                                <span className="text-gray-500">@bootdey</span>
                            </li>
                            <li className="p-4 flex justify-between items-center">
                                <h6 className="font-semibold text-gray-700">Instagram</h6>
                                <span className="text-gray-500">bootdey</span>
                            </li>
                            <li className="p-4 flex justify-between items-center">
                                <h6 className="font-semibold text-gray-700">Facebook</h6>
                                <span className="text-gray-500">bootdey</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="w-full md:w-2/3">
                    <div className="bg-white rounded-lg shadow mb-6 p-6">
                        <div className="flex flex-col space-y-4">
                            <div className="flex justify-between items-center">
                                <h6 className="font-semibold text-gray-700">Full Name</h6>
                                <span className="text-gray-500">Kenneth Valdez</span>
                            </div>
                            <hr />
                            <div className="flex justify-between items-center">
                                <h6 className="font-semibold text-gray-700">Email</h6>
                                <span className="text-gray-500">fip@jukmuh.al</span>
                            </div>
                            <hr />
                            <div className="flex justify-between items-center">
                                <h6 className="font-semibold text-gray-700">Phone</h6>
                                <span className="text-gray-500">(239) 816-9029</span>
                            </div>
                            <hr />
                            <div className="flex justify-between items-center">
                                <h6 className="font-semibold text-gray-700">Mobile</h6>
                                <span className="text-gray-500">(320) 380-4539</span>
                            </div>
                            <hr />
                            <div className="flex justify-between items-center">
                                <h6 className="font-semibold text-gray-700">Address</h6>
                                <span className="text-gray-500">Bay Area, San Francisco, CA</span>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-wrap gap-4">
                        <div className="bg-white rounded-lg shadow p-4 w-full md:w-1/2">
                            <h6 className="text-lg font-semibold mb-2">Project Status</h6>
                            <div className="mb-4">
                                <small>Web Design</small>
                                <div className="w-full bg-gray-200 h-2 rounded">
                                    <div className="bg-blue-500 h-2 rounded" style={{ width: '80%' }}></div>
                                </div>
                            </div>
                            <div className="mb-4">
                                <small>Website Markup</small>
                                <div className="w-full bg-gray-200 h-2 rounded">
                                    <div className="bg-blue-500 h-2 rounded" style={{ width: '72%' }}></div>
                                </div>
                            </div>
                            <div className="mb-4">
                                <small>One Page</small>
                                <div className="w-full bg-gray-200 h-2 rounded">
                                    <div className="bg-blue-500 h-2 rounded" style={{ width: '89%' }}></div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow p-4 w-full md:w-1/2">
                            <h6 className="text-lg font-semibold mb-2">Project Status</h6>
                            <div className="mb-4">
                                <small>Web Design</small>
                                <div className="w-full bg-gray-200 h-2 rounded">
                                    <div className="bg-blue-500 h-2 rounded" style={{ width: '80%' }}></div>
                                </div>
                            </div>
                            <div className="mb-4">
                                <small>One Page</small>
                                <div className="w-full bg-gray-200 h-2 rounded">
                                    <div className="bg-blue-500 h-2 rounded" style={{ width: '89%' }}></div>
                                </div>
                            </div>
                            <div className="mb-4">
                                <small>Mobile Template</small>
                                <div className="w-full bg-gray-200 h-2 rounded">
                                    <div className="bg-blue-500 h-2 rounded" style={{ width: '55%' }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-center mt-4">
                        <button className="btn btn-primary bg-blue-500 text-white px-6 py-2 rounded">
                            <a href="add.html" className="text-white no-underline">Add Question</a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
