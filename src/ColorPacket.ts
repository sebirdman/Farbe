export function buildColorPacket(key: number, color: number, seq: number) {
    return [
        0x00,
        0x28,
        0x00, // something is here in the original packets
        seq,
        0x01,
        key,
        0x02, /* 0x00 = off, 0x01 = stop animation, 0x02 = start animation */
        0x00,
        0x00,
        0x00,
        0x00,
        0x00,
        0x00,
        color,
        0x00,
        0x00,
        0x00,
        0x00,
        0x00,
        0x00,
        0x00,
        0x00,
        0x00,
        0x00,
        0x00,
        0x00,
        0x00,
        0x00,
        0x00,
        0x00,
        0x00,
        0x01,
        0x40, // end
        0x00,
        0x00,
        0x00,
        0x00,
        0x00,
        0x00,
        0x00,
        0x00,
        0x00,
        0x00,
        0x00,
        0x00,
        0x00,
        0x00,
        0x00,
        0x00,
        0x00,
        0x00,
        0x00,
        0x00,
        0x00,
        0x00,
        0x00,
        0x00,
        0x00,
        0x00,
        0x00,
        0x00,
        0x00,
        0x00, // something is here in the original packets
        0x00  // something is here in the original packets
    ]
}