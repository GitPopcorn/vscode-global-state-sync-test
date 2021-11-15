# global-state-sync-test README

This is a demo plugin of VSCode to test the synchronism of context.globalState.

### How to use it

- I create a command `global-state-sync-test.testUpdate` and bind it to `Ctrl + Alt + Shift + F12`, of course you can change it to any other non-conflict keyboard shortcut.
- Strike the hot key quickly enough, then you can see the value is not regularly changed between 1 and -1 in the log, like below:
```
Congratulations, your extension "global-state-sync-test" is now active!
[060268] The cache is:        [-1] now (1636986952377) -- CORRECT
[060268] I have change it to: [ 1]     (1636986952385) -- CORRECT
[063476] The cache is:        [ 1] now (1636986953407) -- CORRECT
[063476] I have change it to: [-1]     (1636986953414) -- CORRECT
[015255] The cache is:        [-1] now (1636986953471) -- CORRECT
[015255] I have change it to: [ 1]     (1636986953480) -- CORRECT
[044339] The cache is:        [ 1] now (1636986953607) -- CORRECT
[044339] I have change it to: [-1]     (1636986953618) -- CORRECT
[094918] The cache is:        [-1] now (1636986953748) -- PARALLEL MODIFICATION A1
[094918] I have change it to: [ 1]     (1636986953776) -- PARALLEL MODIFICATION A1
[069030] The cache is:        [-1] now (1636986953879) -- PARALLEL MODIFICATION A2
[069030] I have change it to: [ 1]     (1636986953886) -- PARALLEL MODIFICATION A2
[027076] The cache is:        [ 1] now (1636986953967) -- PARALLEL MODIFICATION B1
[027076] I have change it to: [-1]     (1636986953981) -- PARALLEL MODIFICATION B1
[054901] The cache is:        [ 1] now (1636986954102) -- PARALLEL MODIFICATION B2
[054901] I have change it to: [-1]     (1636986954114) -- PARALLEL MODIFICATION B2
[093783] The cache is:        [-1] now (1636986954242) -- CORRECT
[093783] I have change it to: [ 1]     (1636986954248) -- CORRECT
[024736] The cache is:        [ 1] now (1636986954327) -- CORRECT
```
