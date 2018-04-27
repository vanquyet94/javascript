const regex = /(09|01[2|6|8|9])+([0-9]{8})\b/g;
const str = `đây là 1 chuỗi chứa số điện thoại 0912345678 và những số 01296430555 có bao gồm cả những số linh tinh như 1234567890 và đây nữa 0123430555111111 và đây nè 09123456781123 and 01634305551 01934305551 01834305551 01734305551`;
let m;

while ((m = regex.exec(str)) !== null) {
    // This is necessary to avoid infinite loops with zero-width matches
    if (m.index === regex.lastIndex) {
        regex.lastIndex++;
    }
    
    // The result can be accessed through the `m`-variable.
    m.forEach((match, groupIndex) => {
        console.log(`Found match, group ${groupIndex}: ${match}`);
    });
}
