const { default: Link } = require("next/link");

 const items = [
    {
        key: '1',
        label: (
            <Link href="/processor">Processor</Link>
        ),
    },
    {
        key: '2',
        label: (
            <Link href="/motherboard">Motherboard</Link>
        )

    },
    {
        key: '3',
        label: (
            <Link href="/ram">Ram</Link>
        )
    },
    {
        key: '4',

        label: (
            <Link href="/power-supply-unit">Power Supply Unit</Link>
        )
    },
    {
        key: '5',

        label: (
            <Link href="/storage-device">Storage Device</Link>
        )
    },
    {
        key: '6',

        label: (
            <Link href="/monitor">Monitor</Link>
        )
    },
    {
        key: '7',

        label: (
            <Link href="/others">Others</Link>
        )
    }
];

export default items;