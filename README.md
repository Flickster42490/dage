# Däge #

Every day, 112 billion corporate emails are sent. All it takes is 1 email to change the course of a company.

What if your HR team can efficiently scan emails for harmful content? What if your security team can know if confidential emails are being put in the wrong hands? What if your sales team can track the content of the best and worst performing emails?

This is where Dage steps in. Dage actively and silently monitors outbound emails from your server, utilizing machine learning to identify emails that is important to your team, and notifying you whenever it finds noteworthy emails. With the ability to scan thousands of emails every minute, Dage provides your company the tools to know the content of your employees’ emails, without you dedicating valuable resources or time.

Let's look at Dage's functionalities:

1. Upon signin, the dashboard providing high-level insights into when flagged emails are sent, most flagged users, and detailed breakdowns of why emails were flagged. The attractive D3-sourced charts and tables provide an easy to understand overview of your company's digital health. Clicking on the dynamic 'New Flags' number dispatches an action to change the state tree to take you to the unread 'alerts' panel. 

2. The unread flagged emails panel allows you to receive new alerts on this screen. Every email has details on which keywords triggered the flag and the context the keyword exists in, allowing the admin or the lower level users to unflag emails to train DageWatch. 

3.The all flagged emails panel archives all unflagged emails or those that have been read. 

4. DageWatch flagged emails - confidence level
5. The customization panel allows the top level admin to manage custom filters and its related keywords. It features responsive adding and removing capabilities despite the need to query the database, thanks to the dynamic re-rendering capabilities based off the React state tree. 

6. The manage users panel allows admin users to manage lower-level users. Set permission groups broken down by department so  teams only see relevant flagged emails. 

All these features provides actionable intel to make it incredibily easy to secure your company's outbound email stream. 

**Architecture**

Dage features simple RESTful API calls from the front-end to back-end. However, it might be tedious/difficult to follow along the React/Redux structure if you have never had experiences with Redux way of creating new state trees through actions and reducers. We've provided an action/reducer map to elucidate how some of the features work. 

Email Fetch
![alt text](http://s21.postimg.org/h0m01vrvb/Redux_State_Tree_Actions_Trial_Blank.png)


**Deployment**

**Testing**

**Contributing**

**Authors**

