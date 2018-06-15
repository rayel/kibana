/*
 * Licensed to Elasticsearch B.V. under one or more contributor
 * license agreements. See the NOTICE file distributed with
 * this work for additional information regarding copyright
 * ownership. Elasticsearch B.V. licenses this file to you under
 * the Apache License, Version 2.0 (the "License"); you may
 * not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */


import { words } from 'lodash';

/**
 * @name {string} the name of the configuration object
 * @returns {string} a space demimited, lowercase string with
 *          special characters removed.
 *
 * Example: 'xPack:fooBar:foo_bar_baz' -> 'x pack foo bar foo bar baz'
 */
export function getAriaName(name) {
  return words(name).map(word => word.toLowerCase()).join(' ');
}