import React, { useContext } from "react";
import { formatPublishedDateTime } from "./news-feed.utils";
import { CompanySymbolContext } from "../../../lib/companyContext";
import "./news-feed-table.styles.scss";

const NewsFeedTable = ({ feeds }) => {
	const { companySymbol } = useContext(CompanySymbolContext);

	const renderNewsFeeds = () => {
		if (feeds.length) {
			return (
				<table>
					{feeds.map((item, index) => {
						const { image, publishedDate, title, url } = item;
						return (
							<tbody key={"head" + index} className="table-item">
								<tr key={"row" + index}>
									<td key={"image" + index}>
										{image && (
											<img src={image} alt="img" className="feed-image" />
										)}
									</td>
									<td key={"title" + index} className="link-tag">
										{url && (
											<div>
												<a href={url} target="_blank" rel="noreferrer">
													{title}
												</a>
											</div>
										)}
									</td>
								</tr>
								<tr key={"publishDate" + index}>
									<td> </td>
									<td className="date-tag">
										{publishedDate && formatPublishedDateTime(publishedDate)}
									</td>
								</tr>
							</tbody>
						);
					})}
				</table>
			);
		} else {
			return <>No news feed available.</>;
		}
	};

	return (
		<div className="news-feeds-table">
			<div className="news-feed-title">
				<h3>
					<i className="fas fa-newspaper fa-1x"></i> {companySymbol} News
				</h3>
			</div>
			{renderNewsFeeds()}
		</div>
	);
};

export default NewsFeedTable;
