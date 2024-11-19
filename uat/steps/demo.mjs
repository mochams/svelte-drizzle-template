import { Given, When, Then, world } from '@cucumber/cucumber';
import assert from 'node:assert/strict';

Given('I have {int} cucumbers', async (cucumberCount) => {
	world.cucumberCount = cucumberCount;
});

When('I eat {int} cucumbers', async (cucumberCount) => {
	world.cucumberCount -= cucumberCount;
});

Then('I should have {int} cucumbers', async (cucumberCount) => {
	assert.equal(world.cucumberCount, cucumberCount);
});
