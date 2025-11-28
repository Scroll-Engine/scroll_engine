export default function Footer() {
    return (
        <footer className="border-t border-white/10 bg-black py-12 text-center text-zinc-500">
            <p>&copy; {new Date().getFullYear()} Scroll-Engine. All rights reserved.</p>
        </footer>
    );
}
