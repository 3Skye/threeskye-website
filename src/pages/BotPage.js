import React, { Component } from 'react'
import BulletPointList from '../components/BulletPointList';
import TsContainer from '../components/TsContainer';
import SectionHeader from '../components/SectionHeader';
import PrivacyPolicySection from '../sections/PrivacyPolicySection';

class BotPage extends Component {
	componentDidMount() {
		document.title = '3SKYE-Disclosure Web Crawler';
		window.scrollTo(0, 0)
	}

	render() {
		return (
			<div className="bg-white">
				<TsContainer bg="blue" className="pb-5">
					<SectionHeader noMargin><h1>3SKYE-Disclosure</h1></SectionHeader>
				</TsContainer>
				<PrivacyPolicySection>
					<p>
						3SKYE-Disclosure is the web crawler for 3Beacon, 3SKYE’s service that monitors product disclosure documents for Australian managed funds and investment products.
					</p>
				</PrivacyPolicySection>
				<PrivacyPolicySection header="What it does">
					<p>
						It reads fund managers’ and product issuers’ public document pages and downloads the disclosure documents those pages link to — Product Disclosure Statements,
						Target Market Determinations, Supplementary PDSs and related notices. 3Beacon uses them to keep an up-to-date record of each product’s current disclosure
						documents and to tell its clients when they change.
					</p>
					<p>
						These are documents issuers are required to make publicly available. We don’t collect personal information, submit forms, sign in to anything or read pages
						behind a login.
					</p>
				</PrivacyPolicySection>
				<PrivacyPolicySection header="How it behaves">
					<BulletPointList
						bullets={[
							"It identifies itself as 3SKYE-Disclosure/1.0 (+https://3skye.com/bot; info@3skye.com) or 3SKYE-Crawler/1.0.",
							"It follows robots.txt, including Crawl-delay: it waits as long between requests to your site as you ask, up to 60 seconds. Without one, it makes at most one request a second.",
							"Documents fetched under an exception are fetched at most one every 10 seconds, or slower where your robots.txt asks.",
							"It re-checks a document only occasionally, to see whether a new version has been published.",
						]}
					/>
					<p>
						<strong>One exception.</strong> Where an issuer publicly links a PDS or TMD from its own pages but robots.txt blocks the folder the file sits in, a member of
						our team may approve fetching those specific documents. That approval covers only disclosure documents linked from the issuer’s own pages, never crawling
						the folder itself, and is recorded against the person who approved it. If you’d rather we didn’t, tell us and we’ll stop.
					</p>
				</PrivacyPolicySection>
				<PrivacyPolicySection noDivider style={{ paddingBottom: 100 }} header="Contact">
					<p>
						If 3SKYE-Disclosure is causing you a problem, you’d like it to stop, or you’d like to give us a better way to get your documents — such as a document
						feed — email <a className="colour-blue" href="mailto:info@3skye.com">info@3skye.com</a>. We’ll respond within one business day.
					</p>
					<p className="mt-5">
						3SKYE · <a className="colour-blue" href="https://www.3skye.com">www.3skye.com</a>
					</p>
				</PrivacyPolicySection>
			</div>
		);
	}
}

export default BotPage;
