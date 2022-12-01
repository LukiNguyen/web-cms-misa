export const validEmail = (value) => {
    if (/^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/.test(value)) {
        return true;
    }
    return 'Vui lòng nhập đúng định dạng Email.';
};

export const validNumberString = (value) => {
    if (/^[0-9]{1,45}$/.test(value)) {
        return true;
    }
    return 'Chỉ được nhập các ký tự là số.';
};

export const phoneValidator = (value) => {
    if (/^((0)[1-9]{2}|\+670|\+(84)[1-9]{1})[0-9]{6,15}$/g.test(value)) {
        return true;
    }
    return 'Vui lòng nhập đúng định dạng Số điện thoại';
};
