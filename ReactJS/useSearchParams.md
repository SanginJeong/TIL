# useSearchParams로 쿼리스트링 관리하기

    const [searchParams, setSearchParams] = useSearchParams();
    const initKeyword = searchParams.get("쿼리이름")
    const [keyword, setKeyword] = useState( initKeyword || "")

    const onChange = (e) => setKeyword(e.target.value);

    const onSubmit = (e) => {
      e.prevenDefault();
      setSearchParams(keyword ? {keyword : keyword} : {})
    }
