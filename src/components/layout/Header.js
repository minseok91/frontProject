function Header() {
    return (
        <header>
            <span onClick={() => window.location.href = '/'}>게시판</span>
        </header>
    );
}

export default Header;
