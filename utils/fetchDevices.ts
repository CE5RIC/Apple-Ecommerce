export const fetchDevices = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getDevices`);

    const data = await res.json();
    const devices: Device[] = data.devices;
    
    return devices;
}