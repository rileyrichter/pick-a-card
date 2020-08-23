# pick-a-card

This is a repo I put together to go with a YouTube video I made to help no-coders and low coders use VS Code, GitHub, and [jsDelivr](https://pick-a-card.webflow.io/) with their Webflow projects.

You can see the website here: [https://pick-a-card.webflow.io/](https://pick-a-card.webflow.io/)

It's using the [Deck of Cards API](http://deckofcardsapi.com/).

Here's a gherkin example that I referenced in the video when documenting automations.

```gherkin
# This Zap has three step
Scenario: A customer fills out our sign-up form
    When the form is submitted
    Then the Zap fires and X happens
    Then the next step happens
    Then the following step happens
    Then the user sees x
```

You can [learn more about gherkin](https://cucumber.io/docs/gherkin/reference/) at cucumber.io.

You can [learn more about getting rid of your master branch](https://www.hanselman.com/blog/EasilyRenameYourGitDefaultBranchFromMasterToMain.aspx) here.

The code I specifically used from this article is:

```
git branch -m master main
git push -u origin main
```

On top of that, it is always helplful to [donate to Black Lives Matter](https://blacklivesmatter.com).
