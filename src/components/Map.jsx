import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import Button from './ui/Button'; // Assuming you might want buttons inside popup

// Fix for default marker icon in React-Leaflet/Vite
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconSize: [25, 41],
    iconAnchor: [12, 41]
});

L.Marker.prototype.options.icon = DefaultIcon;

export default function Map({ jobs, onAccept }) {
    // Default center (New Delhi approximate) or center on first job
    const center = jobs.length > 0 && jobs[0].coordinates
        ? [jobs[0].coordinates.lat, jobs[0].coordinates.lng]
        : [28.6139, 77.2090];

    return (
        <MapContainer center={center} zoom={11} scrollWheelZoom={false} className="h-full w-full rounded-xl z-0">
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {jobs.map((job) => (
                job.coordinates && (
                    <Marker key={job.id} position={[job.coordinates.lat, job.coordinates.lng]}>
                        <Popup>
                            <div className="p-1">
                                <h3 className="font-bold text-sm">{job.vendor}</h3>
                                <p className="text-xs text-stone-500">{job.location}</p>
                                <div className="mt-2 flex justify-between items-center">
                                    <span className="font-bold text-secondary">₹{job.payout}</span>
                                    <Button
                                        onClick={() => onAccept(job.id)}
                                        size="sm"
                                        className="text-xs px-2 py-1 h-auto"
                                    >
                                        Accept
                                    </Button>
                                </div>
                            </div>
                        </Popup>
                    </Marker>
                )
            ))}
        </MapContainer>
    );
}
