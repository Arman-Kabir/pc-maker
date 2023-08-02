const { default: Link } = require("next/link");

 const items = [
    {
        key: '1',
        label: (
            <Link href="/category/processor">Processor</Link>
        ),
    },
    {
        key: '2',
        label: (
            <Link href="/category/motherboard">Motherboard</Link>
        )

    },
    {
        key: '3',
        label: (
            <Link href="/category/ram">Ram</Link>
        )
    },
    {
        key: '4',

        label: (
            <Link href="/category/power-supply">Power Supply Unit</Link>
        )
    },
    {
        key: '5',

        label: (
            <Link href="/category/storage-device">Storage Device</Link>
        )
    },
    {
        key: '6',

        label: (
            <Link href="/category/monitor">Monitor</Link>
        )
    },
    {
        key: '7',

        label: (
            <Link href="/category/others">Others</Link>
        )
    }
];

export default items;