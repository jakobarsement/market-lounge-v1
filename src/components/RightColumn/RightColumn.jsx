import { useCallback, useEffect, useState, useContext } from "react";
import { CompanyContext } from "state/companyContext";
import axios from "axios";
import NewsFeedTable from "./NewsFeed/NewsFeed";
import Feedback from "./FeedbackForm/FeedbackForm";
// TODO: import BookOfTheWeek from "./books/book-of-the-week.component";
const baseURL = process.env.REACT_APP_BASE_URL;
const FIN_PREP_API_KEY = process.env.REACT_APP_FIN_PREP_API_KEY;

const RightColumn = () => {
  const { getCompanySymbol } = useContext(CompanyContext);
  const [responseState, setResponseState] = useState([]);
  const apiUrl = `${baseURL}/stock_news?tickers=${getCompanySymbol()}&limit=50&apikey=${FIN_PREP_API_KEY}`;
  const callNewsfeedApi = useCallback(async () => {
    try {
      const response = await axios.get(apiUrl);
      setResponseState(response.data);
    } catch (err) {
      setResponseState([]);
    }
  }, [apiUrl]);

  useEffect(() => {
    callNewsfeedApi();
  }, [callNewsfeedApi]);

  return (
    <>
      {/* <BookOfTheWeek></BookOfTheWeek> */}
      <NewsFeedTable feeds={responseState}></NewsFeedTable>
      <Feedback />
    </>
  );
};

export default RightColumn;
