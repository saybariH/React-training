export default function LanguageSwitcher({onLanguageChange}){

    const handLangChange = (e) => {
        e.preventDefault()
        onLanguageChange(e.currentTarget.dataset.lang)
    }
    return <>
    <ul className="nav justify-content-center">
    <li className="nav-item">
    <a className="nav-link active" data-lang='AR' href='#' onClick={handLangChange}>Arabic</a>
    </li>
    <li className="nav-item">
    <a className="nav-link active" data-lang='FR' href='#'onClick={handLangChange}>Français</a>
    </li>
    <li className="nav-item">
    <a className="nav-link active" data-lang='EN' href='#'onClick={handLangChange}>English</a>
    </li>
    </ul>
    </>
}