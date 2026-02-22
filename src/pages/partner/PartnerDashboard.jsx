import { useState } from 'react';
import { MapPin, Clock, CheckCircle, Map as MapIcon, List } from 'lucide-react';
import { MOCK_JOBS } from '../../lib/data';
import Button from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';
import Map from '../../components/Map';

export default function PartnerDashboard() {
    const [jobs, setJobs] = useState(MOCK_JOBS);
    const [viewMode, setViewMode] = useState('list'); // 'list' | 'map'

    const handleAccept = (jobId) => {
        alert(`Accepted job ${jobId}! Navigate to job details...`);
        // In a real app, this would updates status and move to 'active'
    };

    return (
        <div className="space-y-6 h-[calc(100vh-100px)] flex flex-col">
            <div className="flex justify-between items-center shrink-0">
                <div>
                    <h1 className="text-2xl font-bold text-stone-900">Available Jobs</h1>
                    <p className="text-stone-500">Pick a task, chop, deliver, and earn.</p>
                </div>
                <div className="flex bg-stone-100 p-1 rounded-lg">
                    <button
                        onClick={() => setViewMode('list')}
                        className={`p-2 rounded-md transition-all ${viewMode === 'list' ? 'bg-white shadow text-stone-900' : 'text-stone-500 hover:text-stone-900'}`}
                    >
                        <List className="w-5 h-5" />
                    </button>
                    <button
                        onClick={() => setViewMode('map')}
                        className={`p-2 rounded-md transition-all ${viewMode === 'map' ? 'bg-white shadow text-stone-900' : 'text-stone-500 hover:text-stone-900'}`}
                    >
                        <MapIcon className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {viewMode === 'list' ? (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 overflow-y-auto pb-4">
                    {jobs.map((job) => (
                        <JobCard key={job.id} job={job} onAccept={() => handleAccept(job.id)} />
                    ))}
                    {jobs.length === 0 && (
                        <div className="col-span-full text-center py-12 text-stone-500">
                            No jobs available right now. Check back later!
                        </div>
                    )}
                </div>
            ) : (
                <div className="flex-grow rounded-xl overflow-hidden border border-stone-200 shadow-sm relative z-0">
                    <Map jobs={jobs} onAccept={handleAccept} />
                </div>
            )}
        </div>
    );
}

function JobCard({ job, onAccept }) {
    return (
        <Card className="flex flex-col h-full hover:shadow-md transition-shadow border-l-4 border-l-secondary">
            <div className="p-5 flex flex-col gap-4 h-full">
                <div className="flex justify-between items-start">
                    <div>
                        <h3 className="font-bold text-lg text-stone-900">{job.vendor}</h3>
                        <div className="flex flex-col gap-1 mt-1">
                            <div className="flex items-center text-stone-500 text-sm">
                                <MapPin className="w-4 h-4 mr-1" />
                                {job.location} ({job.distance})
                            </div>
                            <Button
                                variant="outline"
                                size="sm"
                                className="w-full text-xs h-8 mt-1"
                                onClick={() => window.open(`https://www.google.com/maps/dir/?api=1&destination=${job.coordinates.lat},${job.coordinates.lng}`, '_blank')}
                            >
                                <MapPin className="w-3 h-3 mr-1" /> Navigate
                            </Button>
                        </div>
                    </div>
                    <div className="bg-orange-50 text-secondary font-bold px-3 py-1 rounded-full text-sm h-fit">
                        ₹{job.payout}
                    </div>
                </div>

                <div className="bg-stone-50 p-3 rounded-lg space-y-2">
                    <p className="text-xs font-semibold text-stone-500 uppercase">Order Details</p>
                    <ul className="text-sm space-y-1">
                        {job.items.map((item, idx) => (
                            <li key={idx} className="flex justify-between text-stone-700">
                                <span>{item.name} <span className="text-stone-400">({item.cut})</span></span>
                                <span className="font-medium">{item.weight}</span>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="mt-auto pt-4">
                    <Button onClick={onAccept} className="w-full" variant="secondary">
                        Accept Job
                    </Button>
                </div>
            </div>
        </Card>
    );
}
