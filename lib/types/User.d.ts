export interface User {
    id: string;
    username: string;
    avatar: string;
    avatar_decoration: string | null;
    discriminator: string;
    public_flags: null;
    bot: boolean;
}
