const bcrypt = require('bcryptjs');
const User = require('../models/user');  // یوزر ماڈل کو امپورٹ کریں

const hashPasswords = async () => {
    const users = await User.find();  // تمام یوزرز کو حاصل کریں

    for (const user of users) {
        if (!user.password.startsWith('$2a$')) {  // اگر پاس ورڈ ہیش نہیں کیا گیا تو
            user.password = await bcrypt.hash(user.password, 10);  // پاس ورڈ ہیش کریں
            await user.save();  // اسے ڈیٹابیس میں محفوظ کریں
            console.log(`Updated password for ${user.email}`);
        }
    }
};

hashPasswords();
