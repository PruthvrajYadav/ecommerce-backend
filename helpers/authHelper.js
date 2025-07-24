import bcrytp from 'bcrypt'

export const hashPassword = async (password) => {
    try {
        const salt = 10
        const hashedPassword = await bcrytp.hash(password, salt)
        return hashedPassword
    } catch (error) {
        console.log(error);
    }
}


export const comparePassword = async (password, hashedPassword) => {
    return bcrytp.compare(password, hashedPassword)
}