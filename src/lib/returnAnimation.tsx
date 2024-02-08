import MemberAnimation from "@/components/animation/MemberAnimation";
import MentorAnimation from "@/components/animation/MentorAnimation";

export const returnAnimation = (text: string) => {
    switch (text) {
        case '卒業メンターの方':
            return <MentorAnimation />;
        case 'それ以外の方':
            return <MemberAnimation />;
        default:
            return <MemberAnimation />;
    };
};
